package philoarte.jaemin.api.common.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import philoarte.jaemin.api.artist.domain.Artist;

import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T> {

    public abstract String save(T t);

    public abstract List<T> findAll();

    public abstract Optional<T> findById(Long id);

    public abstract Long count();

    public abstract Optional<T> getOne(Long id);

    public abstract String delete(T t);

    public abstract void deleteAll();

    public abstract Boolean existsById(Long id);

    public abstract void deleteById(Long id);
}
