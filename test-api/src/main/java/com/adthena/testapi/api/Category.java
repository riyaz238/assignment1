package com.adthena.testapi.api;

import com.adthena.testapi.db.entities.CategoryEntity;
import java.util.List;

public interface Category {

  CategoryEntity getCategoryById(Integer catid);

  void deleteCategoryById(Integer catid);

  CategoryEntity upsert(CategoryEntity category);

  List<CategoryEntity> list();
}
