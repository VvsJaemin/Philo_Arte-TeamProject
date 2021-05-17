//package philoarte.jaemin.api.artist.service;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.java.Log;
//import org.springframework.stereotype.Service;
//import philoarte.jaemin.api.artist.domain.Artist;
//import philoarte.jaemin.api.common.service.AbstractService;
//
//@Log
//@RequiredArgsConstructor
//@Service
//public class ArtistServiceImpl extends AbstractService<Artist> implements ArtistService {
//
//    private final ArtistRepository repository;
//    private final PasswordEncoder passwordEncoder;
//    private final SecurityProvider provider;
//    private final AuthenticationManager manager;
//    private final ModelMapper modelMapper;
//
//    @Override
//    public String signup(Artist artist) {
//        if(!repository.existsByName(artist.getUsername())){
//            artist.setPassword(passwordEncoder.encode(artist.getPassword()));
//            List<Role> list = new ArrayList<>();
//            list.add(Role.USER_ROLES);
//            artist.setRoles(list);
//            repository.save(artist);
//            return provider.createToken(artist.getUsername(), artist.getRoles());
//        } else {
//            throw new SecurityRuntimeException("Artist Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
//        }
//    }
//
//    @Override
//    public ArtistDto signin(Artist artist) {
//
//        try {
//            ArtistDto artistDto  = modelMapper.map(artist, ArtistDto.class);
//            artistDto.setToken(
//                    (passwordEncoder.matches(artist.getPassword(), repository.findByName(artist.getUsername()).get().getPassword())
//                    ) ?
//                            provider.createToken(artist.getUsername(), repository.findByName(artist.getUsername()).get().getRoles())
//                            : "WRONG_PASSWORD");
//
//            return artistDto;
//        } catch (Exception e){
//            throw new SecurityRuntimeException("Invalid Artist-Username / Password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
//        }
//
//    }
//
//    @Override
//    public void deleteById(Long artistId) {
//        repository.deleteById(artistId);
//    }
//
//
//    @Override
//    public Long count() {
//        return repository.count();
//    }
//
//    @Override
//    public Optional<Artist> getOne(Long id) {
//        return Optional.empty();
//    }
//
//    @Override
//    public Long delete(Artist artist) {
//        repository.delete(artist);
//        return null;
//    }
//
//
//    @Override
//    public Boolean existsById(long id) {
//        return repository.existsById(id);
//    }
//
//
//    @Override
//    public Long save(Artist artist) {
//        return null;
//    }
//
//    @Override
//    public Optional<Artist> findById(Long artistId) {
//        return repository.findById(artistId);
//    }
//
//    @Override
//    public List<Artist> findAll() {
//        return repository.findAll();
//    }
//    @Override
//    public ArtistDto updateById(ArtistDto artistDto) {
//
//        System.out.println("===================================");
//        System.out.println("===================================");
//        System.out.println(artistDto);
//        System.out.println("===================================");
//        System.out.println("===================================");
//
//
//        Artist updateArtist = repository.updateById(artistDto.getUsername(), artistDto.getPassword());
//        log.info("::::::::::: 변환 ::::::::::::: " );
//        String token = provider.createToken(updateArtist.getUsername(), repository.findByName(updateArtist.getUsername()).get().getRoles());
//        log.info("::::::::::: ISSUED TOKEN ::::::::::::: " + token);
//        artistDto.setToken(token);
//
//        return artistDto;
//
//
////        Artist artist = ModelMapperUtils.getModelMapper().map()
////        return null;
//    }
//
//
//
//}