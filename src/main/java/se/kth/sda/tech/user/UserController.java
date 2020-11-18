package se.kth.sda.tech.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.tech.auth.AuthService;

import java.util.List;

@CrossOrigin
// @CrossOrigin for react experiment
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    AuthService authService;

    @Autowired
    UserService userService;

    @GetMapping("/loggedInUser")
    public User getLoggedInUser() {
        //return authService.getLoggedInUserEmail();
        return userService.findUserByEmail(authService.getLoggedInUserEmail());

    }

}
