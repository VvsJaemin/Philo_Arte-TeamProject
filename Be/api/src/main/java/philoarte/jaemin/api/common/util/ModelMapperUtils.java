package philoarte.jaemin.api.common.util;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
@Component
public class ModelMapperUtils {

    private static ModelMapper modelMapper = new ModelMapper();
    @Bean
    public static ModelMapper getModelMapper(){
        return modelMapper;
    }

}