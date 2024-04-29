
package com.meta.staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class StaffController {
    @Autowired
    private StaffService staffService;

    @GetMapping("/staff")
    public List<Staff> getAllStaffs() {
        return staffService.getAllStaffs();
    }
    
    @GetMapping("/staff/{id}")
    public Staff getStaff(@PathVariable UUID id) {
        return staffService.getStaff(id);
    }

    @PostMapping("/staff")
    public void addStaff(@RequestBody Staff staff) {
        staffService.addStaff(staff);
    }

    @PutMapping("/staff/{id}")
    public void updateStaff(@RequestBody Staff staff, @PathVariable UUID id) {
        staffService.updateStaff(id, staff);
    }

    @DeleteMapping("/staff/{id}")
    public void deleteStaff(@PathVariable UUID id) {
        staffService.deleteStaff(id);
    }
}
