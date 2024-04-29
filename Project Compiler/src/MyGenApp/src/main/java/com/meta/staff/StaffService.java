
package com.meta.staff;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class StaffService {

    @Autowired
    private StaffRepository staffRepository;

    public List<Staff> getAllStaffs() {
        List<Staff> staffs = new ArrayList<>();
        staffRepository.findAll().forEach(staffs::add);        
        return staffs;
    }

    public Staff getStaff(UUID id) {
        Optional<Staff> optionalStaff = staffRepository.findById(id);
        return optionalStaff.orElse(null);
    }

    public void addStaff(Staff staff) {
        staffRepository.save(staff);
    }

    public void updateStaff(UUID id, Staff staff) {
        staffRepository.save(staff);
    }

    public void deleteStaff(UUID id) {
        staffRepository.deleteById(id);
    }
}
