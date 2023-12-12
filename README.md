##TaskSwift

#Live Link: https://taskswift-cd0f1.web.app/
#server Side link: https://task-management-server-peach.vercel.app/


**private route can't be seen without login. one can create a account easily by giving fake email because email verification is not provided yet for simple testing

Used packages & libraries : React Router , React, Tailwind, firebase, lottie react, react toastify, axios and tanstack query

Features: 
1.Home/Dashboard Route: A navbar which contains active route feature created with daisyui and NavLink
       -A Banner section
       -TAsks section: Here tasks are showed consist of title , description and due date. These cards are created according to the dynamic data loaded from database. By clicking on the card it will navigate to task details route

       -A footer containing copyright and links

2. Tasks: All the task is displayed here as in the home page

3.Task Details Route: Here task details and 2 button desplayed. Update button will navigate to a update route where a logged in user will be able to update the task. 
  Add to Do list will take the task to to do list of that specific user

6. To DO section: Here all the task added to to do list of that logged in user will be displayed
   and a delete icon will be shown which can be used to delete that task

7.Add route: Here a form is provided where user will be able to add a task

8. Dynamic Navbar: Before log in login button will be visible and after login it will disappear and avatar will appear. By clicking the avatar user can see his name and logout button

9. Login: Email and password login is given along with google and github login

10. Registration: User can create account with email and password and also by google and github

11. Private Route: Task Details, To do list, Add and update are Private route

12.Pagination: pagination is added to home and tasks route