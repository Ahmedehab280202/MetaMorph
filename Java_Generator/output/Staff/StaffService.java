
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.StaffRepository;
import com.meta.model.Staff;
@Service
public class StaffService {
    @Autowired
    private StaffRepository StaffRepository;
    public List<Staff> getAllStaffs() {
        return StaffRepository.findAll();
    }
    public Staff getStaffById(Integer id) {
        Optional < Staff > result = StaffRepository.findById(id);
        return result.orElse(null);
    }
    public void createStaff(Staff Staff) {
        StaffRepository.save(Staff);
    }
    public Staff updateStaff(Integer id, Staff Staff) {
        try {
            Staff StaffFound = StaffRepository.findById(id).orElse(null);
            if (StaffFound == null) return null;
            StaffRepository.save(Staff);
            return Staff;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deleteStaff(Integer id) {
        StaffRepository.deleteById(id);
    }
}
    