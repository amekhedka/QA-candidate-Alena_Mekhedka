### Part 1
List of test scenarios that cover the "Search/Sechedule Moment" feature for a daily smoke test:

#1
Verify that the user is able to schedule appt with a doctor. 
1. Set up search criteria
2. Click the search button
3. Select a doctor and time for appt 
4. Verify the user can proceed with booking by clicking by one of the available time slot


#2 Verify the user can't select an appointment that is no longer available.
Steps:
1. Set up search criteria
2. Click the search button
3. Find a doctor
4. Wait for the appointment time to expire and click on the expired time
5. Verify window is present "Whoops! Looks like this one got away..."


#3 Verify the user is able to choose an option of care type (clinic or video)
1. Set up search criteria
2. Click the search button
3. Select clinic care >> Verify the user can select an appt with a doctor and see the doctor in the clinic
4. Select video care >> Verify the user can select an appt with a doctor and have care via video


#4 Verify the user can cancel booking with a doctor 
1. Set up search criteria
2. Click the search button
3. Select time
4. Back browser button
5. Select cancel booking
6. Verify the user is able to select another time 

Note: I would recommend improving this logic or just rename button, cause the user is not authorized, and even if they have chosen the time,
they haven't booked yet and in this case is better to remove the "cancel booking" window - IMO :) 

#5 Verify date in the past can't be selected
1. Select location from the drop-down menu
2. Select service from the drop-down menu
3. Select date in the past

#6 Verify the user is redirected to https://www.zoomcare.com/clinic/zoomcare-wilsonville when click to
view more info about clinic
1. Set up search criteria
2. Click the search button
3. Click "View Clinic Services" from any clinic 
4. Click "See more details"
5. Verify the user is redirected to https://www.zoomcare.com/clinic/zoomcare-wilsonville


#7 Verify "More/Less" buttons are present if doctor has > 5 time slots 
1. Set up search criteria
2. Click the search button 
3. Find a doctor with > 5 time slots 
4. Verify button "more" is clickable and gives more time options
5. Verify button "less" is clickable and collapses time options

#8 Verify search panel 
1. Verify the user can't select service if location wasn't selected
2. Verify the user can't select date if service wasn't selected
3. Verify the search button is OFF if location or/and service or/and date wasn't set up

#9 Verify the user can refresh page by clicking "Refresh" btn.
1. Set up search criteria
2. Click the search button
3. Refresh
4. Verify page is refreshed


### Part 2


