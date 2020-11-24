package com.adthena.testapi.api;

import com.adthena.testapi.db.dao.EventDao;
import com.adthena.testapi.db.entities.EventEntity;
import com.adthena.testapi.services.FilterDataService;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import lombok.Value;
import org.jdbi.v3.core.Jdbi;

@Value
@Path("/events")
@Produces(MediaType.APPLICATION_JSON)
public class EventResource implements Event {

  Jdbi jdbi;
  FilterDataService service;

  @GET
  @Path("/{eventid}")
  @Override
  public EventEntity getEventById(@PathParam("eventid") final Integer eventid) {
    return jdbi.onDemand(EventDao.class).getEventById(eventid);
  }

  @PUT
  @Path("/upsert")
  @Override
  public EventEntity upsert(final EventEntity event) {
    return service.save(service.cleanup(event));
  }
}
