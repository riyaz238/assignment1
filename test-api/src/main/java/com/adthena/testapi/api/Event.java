package com.adthena.testapi.api;

import com.adthena.testapi.db.entities.EventEntity;

public interface Event {

  EventEntity getEventById(Integer eventid);

  EventEntity upsert(EventEntity event);
}
