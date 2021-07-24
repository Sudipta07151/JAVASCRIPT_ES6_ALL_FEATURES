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