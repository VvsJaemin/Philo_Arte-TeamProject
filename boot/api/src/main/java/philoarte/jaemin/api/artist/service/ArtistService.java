package philoarte.jaemin.api.artist.service;

import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.artist.domain.ArtistDto;

import java.util.List;

public interface ArtistService {
    String signup(Artist artist);
    ArtistDto signin(Artist artist);


    List<Artist> findAll();
    void deleteById(Long artistId);
    //    Optional<Artist> findById(Long artistId);
    ArtistDto updateById(ArtistDto artistDto);
}