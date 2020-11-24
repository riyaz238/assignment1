package com.adthena.testapi.db.entities;

import lombok.Value;
import lombok.With;

@Value
public class SalesEntity {

  @With
  Integer eventid;
  Integer maxim;
}
