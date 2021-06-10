package philoarte.jaemin.api.artist.service;

import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.artist.domain.ArtistDto;

import java.util.List;

public interface ArtistService {

    ArtistDto signin(ArtistDto artistDto);
    //    Optional<Artist> finByusername(String username);
    List<Artist> getAllData();
    List<Artist> findAll();
    void deleteById(Long artistId);
    //    Optional<Artist> findById(Long artistId);
    ArtistDto updateById(ArtistDto artistDto);


    Long register(ArtistDto artistDto);
    String signup(ArtistDto artistDto);
    default Artist dtoEntity(ArtistDto artistDto){
        Artist entity = Artist.builder()
                .artistId(artistDto.getArtistId())
                .username(artistDto.getUsername())
                .password(artistDto.getPassword())
                .name(artistDto.getName())
                .email(artistDto.getEmail())
                .phoneNumber(artistDto.getPhoneNumber())
                .address(artistDto.getAddress())
                .school(artistDto.getSchool())
                .department(artistDto.getDepartment())
                .build();

        return entity;

    }

    default ArtistDto entityDto(Artist artist) {
        ArtistDto entityDto = ArtistDto.builder()
                .artistId(artist.getArtistId())
                .username(artist.getUsername())
                .password(artist.getPassword())
                .name(artist.getName())
                .email(artist.getEmail())
                .phoneNumber(artist.getPhoneNumber())
                .address(artist.getAddress())
                .school(artist.getSchool())
                .department(artist.getDepartment())
                .build();

        return entityDto;

    }
}