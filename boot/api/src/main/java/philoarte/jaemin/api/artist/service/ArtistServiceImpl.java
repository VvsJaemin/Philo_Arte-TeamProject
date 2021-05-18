package philoarte.jaemin.api.artist.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.artist.domain.ArtistDto;
import philoarte.jaemin.api.artist.domain.Role;
import philoarte.jaemin.api.artist.repository.ArtistRepository;
import philoarte.jaemin.api.common.service.AbstractService;
import philoarte.jaemin.api.security.domain.SecurityProvider;
import philoarte.jaemin.api.security.exception.SecurityRuntimeException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Log
@RequiredArgsConstructor
@Service
public class ArtistServiceImpl extends AbstractService<Artist> implements ArtistService {

    private final ArtistRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final SecurityProvider provider;
    private final AuthenticationManager manager;
    private final ModelMapper modelMapper;

    @Override
    public String signup(Artist artist) {
        if(!repository.existsByName(artist.getUsername())){
            artist.setPassword(passwordEncoder.encode(artist.getPassword()));
            List<Role> list = new ArrayList<>();
            list.add(Role.USER_ROLES);
            artist.setRoles(list);
            repository.save(artist);
            return provider.createToken(artist.getUsername(), artist.getRoles());
        } else {
            throw new SecurityRuntimeException("Artist Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @Override
    public ArtistDto signin(Artist artist) {

        try {
            ArtistDto artistDto  = modelMapper.map(artist, ArtistDto.class);
            artistDto.setToken(
                    (passwordEncoder.matches(artist.getPassword(), repository.findById(artist.getArtistId()).get().getPassword())
                    ) ?
                            provider.createToken(artist.getUsername(), repository.findById(artist.getArtistId()).get().getRoles())
                            : "WRONG_PASSWORD");

            return artistDto;
        } catch (Exception e){
            throw new SecurityRuntimeException("Invalid Artist-Username / Password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
        }

    }

    @Override
    public ArtistDto updateById(ArtistDto artistDto) {

        System.out.println("===================================");
        System.out.println("===================================");
        System.out.println(artistDto);
        System.out.println("===================================");
        System.out.println("===================================");

        Artist artist = modelMapper.map(artistDto, Artist.class);
        repository.save(artist);

        log.info("::::::::::: 변환 ::::::::::::: " );
        ArtistDto artistDtoUpdate = modelMapper.map(artist, ArtistDto.class);
        String token = provider.createToken(artistDtoUpdate.getUsername(), repository.findById(artistDto.getArtistId()).get().getRoles());
        log.info("::::::::::: ISSUED TOKEN ::::::::::::: " + token);

        artistDto.setToken(token);

        return artistDto;

    }

    @Override
    public void deleteById(Long artistId) {

    }


    @Override
    public Long count() {
        return null;
    }

    @Override
    public Optional<Artist> getOne(Long id) {
        return null;
    }

    @Override
    public String delete(Artist artist) {

        return null;
    }

    @Override
    public void deleteAll() {

    }

    @Override
    public Boolean existsById(Long id) {
        return null;
    }


    @Override
    public String save(Artist artist) {

        return (repository.save(artist) != null)? "Success" : "fail";
    }

    @Override
    public Optional<Artist> findById(Long artistId) {
        return repository.findById(artistId);
    }



    @Override
    public List<Artist> findAll() {
        System.out.println("-------------------------------");
        return repository.getAllData();
    }




}
