//filter

var players = [
    { name: 'Laporte', pos: 'CB',con:'ESP' },
    { name: 'Olmo', pos: 'AMF', con: 'ESP' },
    { name: 'Pedri', pos: 'CMF', con: 'ESP' },
    { name: 'Rodri', pos: 'DMF', con: 'ESP' },
    { name: 'Bunnucci', pos: 'CB', con: 'ITA'},
    { name: 'Chisea', pos: 'LWF', con: 'ITA' },
    { name: 'Shakiri', pos: 'AMF', con: 'SUI' },
    { name: 'Xhaka', pos: 'DMF', con: 'SUI' },
    { name: 'Goretzka', pos: 'CMF', con: 'GER' },
    { name: 'Modric', pos: 'DMF', con: 'CRO' },
    { name: 'Lewandowski', pos: 'CF', con: 'POL' },
    { name: 'Morata', pos: 'CF', con: 'ESP' },
    { name: 'Kane', pos: 'CF', con: 'ENG' },
    { name: 'Traore', pos: 'RWF', con: 'ESP' },
    { name: 'Torres', pos: 'RWF', con: 'ESP' },
    { name: 'Sterling', pos: 'RWF', con: 'ENG' },
    { name: 'Moreno', pos: 'CF', con: 'ESP' },
  ]
  
  //without helper function
  var italy_players=[]
  for(var i=0;i<players.length;i++)
  {
    if(players[i].con==='ITA')
    italy_players.push(players[i]);
  }
  
  console.log(italy_players);
  
  
  //using helper function
  //truthy value will be included in new array
  //falsy will be removed or rather to say not to be included
  var ita_players=players.filter(function(player){
    return player.con==='ITA'
  })
  
  console.log(ita_players);
  
  //using helper function
  //not italy players
  //and arrow function
  var not_italy_players = players.filter(player=>player.con !== 'ITA')
  console.log(not_italy_players);
  
  //player pos is CF country is ESP or ENG
  
  cf_esp_player = players.filter(player => player.pos === 'CF' && (player.con === 'ESP' || player.con === 'ENG') )
  console.log(cf_esp_player)
  
  
  //example
  
  var post={id:23,title:'Awesome experience at GIZA'}
  
  var comments=[
    {id:23,comment:'Wow it looks so good'},
    { id: 2, comment: 'You are a freak'},
    { id: 3, comment: 'Cool pic'},
    { id: 233, comment: 'That pineapple looks yummy :)'},
    { id: 23, comment: 'Did you go inside the pyramid?'},
  ]
  
  //get all comment for that post (id =23, in this case)
  get_comment=comments.filter(obj=>obj.id===post.id)
  console.log(get_comment)
  
  //a single function to handle it all
  
  function getCommentsForPost(post,comments){
    var data=comments.filter(obj => obj.id === post.id)
    return data
  }
  
  data=getCommentsForPost(post,comments)
  console.log(data)

  var players = [
    { name: 'Laporte', pos: 'CB', con: 'ESP' },
    { name: 'Olmo', pos: 'AMF', con: 'ESP' },
    { name: 'Pedri', pos: 'CMF', con: 'ESP' },
    { name: 'Rodri', pos: 'DMF', con: 'ESP' },
    { name: 'Bunnucci', pos: 'CB', con: 'ITA' },
    { name: 'Chisea', pos: 'LWF', con: 'ITA' },
    { name: 'Shakiri', pos: 'AMF', con: 'SUI' },
    { name: 'Xhaka', pos: 'DMF', con: 'SUI' },
    { name: 'Goretzka', pos: 'CMF', con: 'GER' },
    { name: 'Modric', pos: 'DMF', con: 'CRO' },
    { name: 'Lewandowski', pos: 'CF', con: 'POL' },
    { name: 'Morata', pos: 'CF', con: 'ESP' },
    { name: 'Kane', pos: 'CF', con: 'ENG' },
    { name: 'Traore', pos: 'RWF', con: 'ESP' },
    { name: 'Torres', pos: 'RWF', con: 'ESP' },
    { name: 'Sterling', pos: 'RWF', con: 'ENG' },
    { name: 'Moreno', pos: 'CF', con: 'ESP' },
  ]
  
  //traditional method
  //find player Xhaka
  
  var playerXhaka;
  for(var i=0;i<players.length;i++)
  {
    if(players[i].name==='Xhaka'){
      playerXhaka=players[i]
    break;
    }
    else{
  
    }
  }
  console.log(playerXhaka)
  
  //helper function
  
  var player=players.find(function (player){
    return player.name==='Xhaka'
  })
  
  console.log(player)
  
  //but it only returns first found element
  var team = players.find(function (player) {
    return player.con === 'GER'
  })
  
  console.log(team)
  
  
  //example 
  var posts = [
    { id: 23, title: 'Awesome experience at GIZA' },
    { id: 2, title: 'A lousy day' },
    { id: 13, title: 'Terrific Goal' }
  ]
  var comments = [
    { pid: 23, comment: 'Wow it looks so good',cid:1 },
    { pid: 2, comment: 'You are a freak', cid: 2 },
    { pid: 3, comment: 'Cool pic', cid: 3 },
    { pid: 233, comment: 'That pineapple looks yummy :)', cid: 4 },
    { pid: 23, comment: 'Did you go inside the pyramid?', cid: 5 },
    { pid: 13, comment: 'The VAR system is botched!!', cid: 6}
  ]
  
  //find first post with post id==13 in comment
  var postId13Comment=comments.find(comment => comment.pid === (posts.find(post => post.id ===13).id))
  console.log(postId13Comment)