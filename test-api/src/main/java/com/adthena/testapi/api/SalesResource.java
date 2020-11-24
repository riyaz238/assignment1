package com.adthena.testapi.api;

import com.adthena.testapi.db.dao.SalesDao;
import com.adthena.testapi.db.entities.SalesEntity;
import com.adthena.testapi.services.FilterDataService;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import lombok.Value;
import org.jdbi.v3.core.Jdbi;

@Value
@Path("/sales")
@Produces(MediaType.APPLICATION_JSON)
public class SalesResource implements Sales {

  Jdbi jdbi;
  FilterDataService service;

  @GET
  @Path("/maxsaleseventid")
  @Override
  public SalesEntity getMaxSalesEventId() {
    return jdbi.onDemand(SalesDao.class).getMaxSalesEventId();
  }
}
