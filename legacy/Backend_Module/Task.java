package com.meta.model;
@Entity
public class Task {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id
    private String task_name ;
 private String gettask_name() {
 return task_name }
 private void  settask_name(String task_name) {
this.task_name = task_name; }
}
