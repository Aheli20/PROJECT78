var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg",
"https://image.shutterstock.com/image-vector/young-good-looking-woman-doing-260nw-1957404790.jpg", 
"https://cdn3.vectorstock.com/i/1000x1000/41/07/cartoon-man-male-parent-family-adult-member-vector-15024107.jpg" , 
"https://image.freepik.com/free-vector/cute-girl-body-cartoon_18591-41519.jpg", 
"https://media.istockphoto.com/vectors/granny-old-lady-3d-realistic-cartoon-character-design-isolated-vector-vector-id614020740?k=20&m=614020740&s=612x612&w=0&h=QhBV8_ITgJD70x3sLWJUy2HeQJ1uciEoFQBsUbTEVWE=" 
];
var names = ["Family Book","Kanika Pal", "Srikrishna Pal", "Aheli Pal", "Suniti Rani Pal"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i == 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
