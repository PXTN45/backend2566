# Restaurant Restfull API
* Author : **Nattaphong Sriphaophan**

หน้า db.config.js  คือการใส่ค่าเชื่อต่อ database
![Alt text](image.png)

หน้า controller จะมี 5 function 
1.getAll คือ การดึงข้อมูลทั้งหมดมาแสดง
![Alt text](image-1.png)
2.getById คือ การดึงข้อมูลด้วยหมายเลข id มาแสดงเท่านั้น
![Alt text](image-2.png)
3.creatRes คือ การสร้าง restaurant ใหม่
![Alt text](image-3.png)
4.deleteById คือ การลบข้อมูล โดนอิงจาก ID
![Alt text](image-4.png)
5.updateById คือ การแก้ไขข้อมูลโดยอิงจาก ID
![Alt text](image-5.png)
และ export function ออกไปใช้งาน
![Alt text](image-6.png)

หน้า db คือการเชื่อต่อ database และ เช็คการเชื่อต่อ database
![Alt text](image-7.png)

หน้า Router คือการนำทางในนี้จะเป็น URL หรือเป็นเส้นทางขอหน้าเว็ปเรา
![Alt text](image-8.png)

หน้า server มีหน้าที่ on server 
![Alt text](image-9.png)