package com.infinite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infinite.model.Score;
import com.infinite.model.User;

@Repository
public interface ScoreRepository  extends JpaRepository<Score, Long> {
}
