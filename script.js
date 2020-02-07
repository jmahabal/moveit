var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

const cjList = document.querySelector("#dbTest");
const form = document.querySelector("#add-post-form");

//Create element and render post
function renderPost(doc){
  let li = document.createElement("li");
  let title = document.createElement("span");
  let content = document.createElement("span");
  let date = document.createElement("span");
  let topic = document.createElement("span");
  
  // li.setAttribute("data-id", doc.id);
  // title.textContent = doc.data().title;
  // content.textContent = doc.data().content;
  // date.textContent = doc.data().date;
  // topic.textContent = doc.data().topic;
  
      $("#posts").append("<div id='posts'> <div class='post'> <div class='postInfo'> <h4 class='postTitle'>" + doc.data().title + "</h4> <p class='postDate'>" + doc.data().date + "</p> </div> <p class='postContent'>" + doc.data().content + "</p> <div class='tags'> <p>" + doc.data().topic + "</p> </div> </div> </div>");
  
  li.appendChild(title);
  li.appendChild(content);
  li.appendChild(date);
  li.appendChild(topic);
  
  cjList.appendChild(li);
}

//retrieving data
db.collection("posts").get().then((snapshot) => {
  // console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
    // console.log(doc.data());
    renderPost(doc);
  });
});

//saving data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection("posts").add({
    title: form.title.value,
    content: form.content.value,
    date: new Date(Date.now()).toLocaleDateString(),
    topic: form.topic.value,
  });
  form.title.value = "";
  form.content.value = "";
  form.topic.value = "";
});

db.collection("posts").onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    renderPost(change.doc);
  })
});

//---------------------------------------------------
$(document).ready(function() {
  $("#submit").click(function() {
    var post = {
      title: $("#user-input-title").val(),
      content: $("#user-input-content").val(),
      date: new Date(Date.now()),
      upvotes: 0,
      downvotes: 0,
      topic: $("#user-input-topic").val()
    } 
    
    console.log(post);
    
    $("#posts").append("<div id='posts'> <div class='post'> <div class='postInfo'> <h4 class='postTitle'>" + post.title + "</h4> <p class='postDate'>" + post.date + "</p> </div> <p class='postContent'>" + post.content + "</p> <div class='tags'> <p>" + post.topic + "</p> </div> </div> </div>");
  });
});



function writePostData(title, content, date, upvotes, downvotes) {
  
} 

var crimJustice = {
  title: "Criminal Justice Topic",
  about: "On February 5th over 350 of protesters in Florida came together to rally for the Criminal Justice Reforms. The protesters came together to propose legislation that would reqiure inmates to serve 65% instead of 85% of their serving. <a href='https://www.wctv.tv/content/news/Hundreds-rally-for-criminal-justice-reform-in-Florida--567595001.html' target='blank'>Source</a>",
  video: "<iframe <iframe width='560' height='315' src='https://www.nbcnews.com/news/embedded-video/mmvo78138437954' scrolling='no' frameborder='0' allowfullscreen></iframe></iframe>",
} 
var lgbtqNews = { 
  title: "LGBTQ News",
  about: "Just hours ago West Virginia became the first state to accept lawmakers' law to pass proctection for the LGBTQ community. This law will ban things like discrimination in housing, Employment, public spaces and credit transactions towards LGBTQ people and their community. <a href='https://www.nbcnews.com/feature/nbc-out/virginia-lawmakers-pass-protections-lgbtq-people-n1132301' target='blank'>Source</a>",
  video: "<iframe src='//players.brightcove.net/293884104/gh5LeNtQaQ_default/index.html?videoId=6093230587001' allowfullscreen frameborder=0></iframe>",
}
var immiUpdates = { 
  title: "Immigration Updates",
  about: "A recent Immigragation update has been going around where Federal Agencies use Cell Phone location data for immigration enforcements. The Trump administration has brought access to get into a commercial database that access millions of people movement through their cell phones. They are also using this information for immigration and border enforcement. <a href='https://www.wsj.com/articles/federal-agencies-use-cellphone-location-data-for-immigration-enforcement-11581078600'>Source</a>",
  video: "<iframe allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' width='512' height='288' src='https://video-api.wsj.com/api-video/player/v3/iframe.html?guid=C6454D1E-66F7-4969-BDE0-BE2ED18B6F96'></iframe>", 
}
var gunLaws = {
  title: "Gun Laws",
  about: "Starting today Virginia’s bill to ban assault weapons was rammed through by a committee earlier today. The bill has passed though the house of Delegate committee on public safety and the ending results came to be 12 out of 9. This bill will ban people from carrying a shotgun with a magazine that holds more than seven rounds. Last, this bill will prohibit dealers from buying, selling, renting, trading, or transferring from anyone's inventory that can cause harm to anyone around.",
  video: "<iframe src='https://www.sacbee.com/news/politics-government/article239986043.html/video-embed' width='640' height='400' frameborder='0' allowfullscreen='true'></iframe>"
}

$("#cjBtn").click(function() {
  displayAbout(crimJustice);
});
$("#lgbtqBtn").click(function() {
  displayAbout(lgbtqNews);
});
$("#immiBtn").click(function() {
  displayAbout(immiUpdates);
})
$("#glBtn").click(function() {
  displayAbout(gunLaws);
  

});

function displayAbout(obj) {
  $(".title").html(obj.title);
  $(".infoBox").html(obj.about);
  $(".video").html(obj.video);
}
 