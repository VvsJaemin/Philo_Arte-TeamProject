package philoarte.jaemin.api.common.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T> {

    public abstract String save(T t);

    public abstract Optional<T> findById(long id);

    public abstract Page<T> findAll(Pageable pageable);

    public abstract List<T> findAll();

    public abstract int count();

    public abstract Optional<T> getOne(long id);

    public abstract Long delete(long id);

    public abstract Boolean existsById(long id);

    public abstract void deleteById(long id);
}
