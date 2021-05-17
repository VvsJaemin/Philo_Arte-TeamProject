package philoarte.jaemin.api.common.util;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Configuration
public class ModelMapperUtils {

    @Bean
    public ModelMapper modelMapper(){


        return new ModelMapper();
    }

}