#Plugin Code assistor for KB-IDE

CodeAssistor ประกอบด้วยชุดคำสั่งหลัก คือ
1.Array
2.map

Array
เป็นคำสั่งสำหรับการใช้งาน อาเรย์โดยที่เราสามารถกำหนด ชนิดของตัวแปรได้ เป็น Int,Float หรือ String กำหนดชื่อของอาเรย์ และใส่ค่าของอาเรย์ ได้ภายในบล๊อค Array ซึ่งวิธีการมีดังนี้
กำหนดชนิดของอาเรย์

กำหนดชื่อตัวแปรของอาเรย์

ใส่ค่าของ อาเรย์ การใส่ค่าของอาเรย์ ให้เราพิมพ์ , ระหว่างค่าทั้งสองค่าเพื่อเป็นการแบ่งอาเรย์ตามตัวอย่าง

Value Of
เป็นบล๊อคสำหรับการอ่านค่าอาเรย์ โดยที่เราใส่ชื่อตัวแปรที่เราตัองการจะอ่านค่าลงไปและต้องกำหนด ที่ at ว่าเราจะนำต่าของอาเรย์ที่เราอ่านได้ไปเก็บไวในตัวแปรอะไร

map
เป็นคำสั่งใน เป็นฟังก์ชัน เปลี่ยนค่าจากช่วงนึง ไปเป็นอีกช่วงหนึ่ง เช่น ค่าของเราจากที่อ่านได้ 0-1023 เราต้องการให้มันออกมาเป็น 0-100 ก็ใช้คำสั่ง map ซึ่งจะต้องกำหนดค่าต่างๆเรียกว่า parameters (พารามิเตอร์) ดังนี้

map variable ( value, 0, 1023, 0, 100 )
