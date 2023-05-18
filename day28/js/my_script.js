$(function () {
  //alert("Ok");

  //3.랜덤숫자를 나오게 하는 함수를 만들어서 랜덤한 카드를 줄 수 있게 한다
  function Rendom(num) {
    //52보다 큰수가 나오면 안됨
    var my_num = Math.floor(Math.random() * num);
    return alert(my_num);
  }

  $("#btnHit").click(function () {
    //3. 모든카드가 뒤집어진 이미지를 클릭하면 카드게임시작
    // 카드를 분배(deal)해서 게임을 시작.
  });

  function deal() {
    // 4. 카드 분배
    for (var i = 0; i < 2; i++) {
      // 두번의 카드를 펼치는 동작.
      hit();
    }
  }

  var used_cards = []; //6.player가 사용한 카드배열, 최대 5개까지 담을 수 있다.
  var asd = {
    // 7. 내가 받은 카드의 배열 , 그때 그때 받은 카드의 합계 , 모든 카드의 총합.
    cards: [],
    current_total: 0,
    sumCardTotal: function () {
      //카드의 합을 21과 비교
      for(){ //플레이어가 가지고 있는 카드갯수만큼 반복

      }
      // 카드 총 합계를 21과 비교한다
    if(){ // 카드의 합이 21 이상일경우

    }else if(){ // 카드의 합이 21인 경우

    }else if(){ //카드의 합이 21이거나 카드를 5개 가지고 있는경우

    }
  }

  };
  // 플레이어가 가지고 있는 카드 객체

  function total() {
    // 7. 카드의 총합이 21인지 비교
  }

  function hit() {
    //5. 카드를 받아서 펼쳐서 계산하는 동작
    //일단 필요한것은 임의의 숫자(0~51까지의 숫자)
    // do{// 제일 처음의 카드는 랜덤함수를 통해 나온 임의의 숫자를  덱배열의 index에 추가해서 카드하나를 펼친다.
    var index = Rendom(52);

    // player가 카드를 몇개 사용했는지 필요.
    used_cards[used_cards.length] = index;
    alert("현재 플레이어가 사용한 카드의 갯수는 : " + used_cards.length);

    var c = deck[index]; // 모든 카드가 담긴 덱배열 인덱스자리에 랜덤숫자를 넣어서 카드하나를 담는다.
    hand.cards[hand.cards.length] = c; // 나의 카드로 만든다
    alert("플레이어가 가지고 있ㄴ는 카드의 갯수는:" + used_cards.length);

    // 두번의 카드를 뽑아서 펼쳤을때 두카드의 합이 21인지 비교하여 결과를 알려줌
    var $d = $("<div id='imgWrap'>"); // 가상의 요소를 jquery 객체로 만든다.
    $("<img class='img'>")
      .appendTo($d)
      .attr("src", "images/cards/" + c.suit + "/" + c.name + ".jpg");
    $d.appendTo($("#my_hand"));
    // }while()
  }

  $("#btnDeal").click(function () {
    // alert(Rendom(51));
    deal(); //hit함수로 연결
  });

  //card의 생성자 함수
  function card(name, suit, value) {
    //1.카드의 생성자함수를 만들어놓는다
    this.name = name;
    this.suit = suit;
    this.value = value;
  }

  var deck = [
    //2.카드마다 새 객체를 만들어서 3개의 프로퍼티값을 생성자함수에 넣어
    //52개의 모든 카드를 배열로 모아둔다
    //모든 카드는 이름,모양,숫자로 구분할수 있다
    //하나의 카드에는 프로퍼티가 3개가 담겨있다
    new card("Ace", "Diamonds", 11), //카드객체(인스턴스)
    new card("two", "Diamonds", 2), //카드객체(인스턴스)
    new card("three", "Diamonds", 3),
    new card("four", "Diamonds", 4),
    new card("five", "Diamonds", 5),
    new card("six", "Diamonds", 6),
    new card("seven", "Diamonds", 7),
    new card("eight", "Diamonds", 8),
    new card("nine", "Diamonds", 9),
    new card("ten", "Diamonds", 10),
    new card("king", "Diamonds", 10),
    new card("jack", "Diamonds", 10),
    new card("queen", "Diamonds", 10),

    new card("Ace", "heart", 11),
    new card("two", "heart", 2),
    new card("three", "heart", 3),
    new card("four", "heart", 4),
    new card("five", "heart", 5),
    new card("six", "heart", 6),
    new card("seven", "heart", 7),
    new card("eight", "heart", 8),
    new card("nine", "heart", 9),
    new card("ten", "heart", 10),
    new card("king", "heart", 10),
    new card("jack", "heart", 10),
    new card("queen", "heart", 10),

    new card("Ace", "Spades", 11),
    new card("two", "Spades", 2),
    new card("three", "Spades", 3),
    new card("four", "Spades", 4),
    new card("five", "Spades", 5),
    new card("six", "Spades", 6),
    new card("seven", "Spades", 7),
    new card("eight", "Spades", 8),
    new card("nine", "Spades", 9),
    new card("ten", "Spades", 10),
    new card("king", "Spades", 10),
    new card("jack", "Spades", 10),
    new card("queen", "Spades", 10),

    new card("Ace", "Clubs", 11),
    new card("two", "Clubs", 2),
    new card("three", "Clubs", 3),
    new card("four", "Clubs", 4),
    new card("five", "Clubs", 5),
    new card("six", "Clubs", 6),
    new card("seven", "Clubs", 7),
    new card("eight", "Clubs", 8),
    new card("nine", "Clubs", 9),
    new card("ten", "Clubs", 10),
    new card("king", "Clubs", 10),
    new card("jack", "Clubs", 10),
    new card("queen", "Clubs", 10),

    // {name:"Ace", suit:"Diamonds", value:11  },//Ace는 11로 계산
    // {name:"two", suit:"Diamonds", value:2  },
    // {name:"three", suit:"Diamonds", value:3  },
    // {name:"four", suit:"Diamonds", value:4  },
    // {name:"five", suit:"Diamonds", value:5  },
    // {name:"six", suit:"Diamonds", value:6  },
    // {name:"seven", suit:"Diamonds", value:7  },
    // {name:"eight", suit:"Diamonds", value:8  },
    // {name:"nine", suit:"Diamonds", value:9  },
    // {name:"ten", suit:"Diamonds", value:10  },
    // {name:"king", suit:"Diamonds", value:10  },
    // {name:"qeeen", suit:"Diamonds", value:10  },
    // {name:"jack", suit:"Diamonds", value:10  }
  ]; //모든 카드(52개)를 배열로 담아둔다

  //   alert(deck[0].name + " " + deck[0].suit + " " + deck[0].value); //Object
});
