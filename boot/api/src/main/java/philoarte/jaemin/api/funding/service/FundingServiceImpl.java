package philoarte.jaemin.api.funding.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import philoarte.jaemin.api.common.service.AbstractService;
import philoarte.jaemin.api.funding.domain.Funding;
import philoarte.jaemin.api.funding.repository.FundingRepository;

import java.util.List;
import java.util.Optional;

@Log
@Service
@RequiredArgsConstructor
public class FundingServiceImpl extends AbstractService<Funding> implements FundingService {

    private final FundingRepository repository;

    @Override
    public List<Funding> findAll() {
        return repository.findAll();
    }

    @Override
    public String save(Funding funding) {
        return (repository.save(funding) != null) ? "Success" : "Failed";
    }

    @Override
    public Optional<Funding> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public Page<Funding> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public int count() {
        return 0;
    }

    @Override
    public Optional<Funding> getOne(long id) {
        return Optional.empty();
    }

    @Override
    public Long delete(long id) {
        return null;
    }

    @Override
    public Boolean existsById(long id) {
        return null;
    }

    @Override
    public void deleteById(long id) {
        repository.deleteById(id);
    }
}
