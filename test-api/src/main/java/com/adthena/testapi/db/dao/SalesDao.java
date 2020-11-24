package com.adthena.testapi.db.dao;

import com.adthena.testapi.db.entities.SalesEntity;
import org.jdbi.v3.sqlobject.config.RegisterConstructorMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

public interface SalesDao {

  @SqlQuery("SELECT eventid, CAST((SUM(qtysold) * COUNT(*)) AS INT) AS maxim FROM public.sales GROUP BY eventid ORDER BY maxim DESC, eventid DESC LIMIT 1")
  @RegisterConstructorMapper(SalesEntity.class)
  SalesEntity getMaxSalesEventId();

}
