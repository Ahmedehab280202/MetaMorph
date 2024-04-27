
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/Staff")
    public class StaffController {
    @Autowired
    private StaffService StaffService;
    @GetMapping
    public List<Staff> getAllStaffs() {
        return StaffService.getAllStaffs();
    }
    @GetMapping("/{id}")
    public Staff getStaffById(@PathVariable Integer id) {
        return StaffService.getStaffById(id);
    }
    @PostMapping("/{add}")
    public void createStaff(@RequestBody Staff Staff) {
        StaffService.createStaff(Staff);
    }
    @PutMapping("/{id}")
    public void updateStaff(@PathVariable Integer id, @RequestBody Staff Staff) {
        StaffService.updateStaff(id, this.class_name);Staff
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        StaffService.deleteStaff(id);
    }
    