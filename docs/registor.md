---
sidebar_position: 2
title: วิธีการลงทะเบียน
---
ผู้ใช้ (User) อนุมัติการลงทะเบียนโดยผู้ดูแลระบบ (Admin)

ผู้ดูแลระบบ (Admin) อนุมัติการลงทะเบียนโดยผู้พัฒนาระบบ (Developer)

**1. การลงทะเบียนมี 2 แบบ**
    
    1.1 กรณีเป็นผู้ใช้ (User)
    
    1.2 กรณีเป็นผู้ดูแลระบบ (Admin)

**2.การอนุมัติขอลงทะเบียน (เฉพาะผู้ดูแลระบบ (Admin) เท่านั้น)**

---

### 1. การลงทะเบียน

#### 1.1 กรณีเป็นผู้ใช้ (User)

ขั้นตอนที่ 1 คลิก `เข้าสู่ระบบ` ที่มุมขวาล่างของเว็บไซต์
<center>
<img src="/img/log_in.jpg" width="500" />
</center>
<center>
(ภาพแสดงตำแหน่ง เข้าสู่ระบบ)
</center>
ขั้นตอนที่ 2 คลิก `ลงทะเบียน`
<center>
<img src="/img/log_in1.jpg" width="500" />
</center>
<center>
(ภาพแสดงหน้าลงทะเบียน)
</center>
ขั้นตอนที่ 3 กรอกรายละเอียดข้อมูล ดังนี้
- กรอกชื่อผู้ใช้ (ไม่จำเป็นต้องเป็นอีเมล)
- กรอกรหัสผ่านสำหรับเข้าเว็บไซต์
- กรอกชื่อ-นามสกุล 
- เลือกบทบาท
    - เป็นหมอ : เลือกแผนกที่สังกัด 1 แผนก, คลินิกได้มากกว่า 1 คลินิก
    - ไม่เป็นหมอ : เลือกแผนกที่สังกัด 1 แผนก, คลินิก 1 คลินิก เท่านั้น
<center>
<img src="/img/Role_Doctor.jpg" width="500" />
</center>
<center>
(ภาพแสดงการเลือกบทบาท)
</center>
ขั้นตอนที่ 4 หากลงทะเบียนสำเร็จจะมีข้อความแจ้ง "ลงทะเบียนสำเร็จ" ดังภาพข้างล่าง และนำท่านเข้าสู่หน้า เข้าสู่ระบบ
<center>
<img src="/img/log_in2.jpg" width="500" />
</center>
<center>
(ภาพแสดง ลงทะเบียนสำเร็จและไปยังหน้าเข้าสู่ระบบ)
</center>
ขั้นตอนที่ 5 รอผู้ดูแลระบบ (Admin) อนุมัติการขอลงทะเบียน

#### 1.2 กรณีเป็นผู้ดูแลระบบ (Admin)
- ทำขั้นตอนที่ 1-5 ตาม กรณีเป็นผู้ใช้ (User) ข้างบน
- การขอเป็นผู้ดูแลระบบ (Admin) ต้องได้รับการอนุมัติจากผู้ดูแลระบบ (Admin)เดิม
- ขั้นตอนการอนุมัติเป็นผู้ดูแลระบบ (Admin)
    - คลิก `ขีด 3 ขีด` ด้านซ้ายบน และกดเลือก `ผู้ใช้`
    - เลือกรายชื่อที่ต้องการ
    - ติ๊กถูก ที่ช่อง `ผู้ดูแลระบบ` และกด `Save`
<center>
<img src="/img/accept_admin.jpg" width="500" />
</center>
<center>
(ภาพแสดงขั้นตอนการอนุมัติเป็นผู้ดูแลระบบ (Admin))
</center>

---

### 2. การอนุมัติขอลงทะเบียน (เฉพาะผู้ดูแลระบบ (Admin) เท่านั้น)

ขั้นตอนที่ 1 เข้า[โหมดแก้ไขระบบ1](https://phutthaisong.vercel.app/admin/dash)

ขั้นตอนที่ 2 กรอกชื่อผู้ใช้ และรหัสผ่านเพื่อเข้าสู่ระบบ

ขั้นตอนที่ 3 จะปรากฏ "รายชื่อผู้ใช้ที่รอการอนุมัติ"

ขั้นตอนที่ 4 คลิก `ยอมรับ` 

*หมายเหตุ : กรณีคลิก `ปฏิเสธ` แล้วต้องการยกเลิก กรุณาติดต่อ[ผู้พัฒนาระบบ (Developer)](/docs/other/developer.md) เพื่อดึงข้อมูลกลับมา* 
<center>
<img src="/img/accept.jpg" width="500" />
</center>
<center>
(ภาพแสดงการอนุมัติขอลงทะเบียนของผู้ใช้)
</center>


