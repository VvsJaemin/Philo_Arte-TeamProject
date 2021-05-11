package philoarte.jaemin.api.item.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name ="fund_items")
public class Item {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long fundItemId;
}
