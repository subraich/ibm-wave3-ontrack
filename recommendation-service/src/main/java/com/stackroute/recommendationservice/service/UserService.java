package com.stackroute.recommendationservice.service;

import com.stackroute.rabbitmq.domain.User;


import java.util.List;

public interface UserService {
    public List<User> getAllUser();
    public User createUser(User user);
}
