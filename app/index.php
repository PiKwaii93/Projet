<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: authorization');
header('Access-Control-Allow-Headers: authorization');

//var_dump(getallheaders());

$dsn = "mysql:host=db;dbname=data";
$user = "root";
$pwd = "password";
$pdo = new PDO($dsn, $user, $pwd);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$pdo->query("CREATE TABLE IF NOT EXISTS`users` ( 
    `id` INT NOT NULL AUTO_INCREMENT
    , `nom` VARCHAR(50) NOT NULL
    , `password`VARCHAR(100) NOT NULL
    , `token` VARCHAR(100) NOT NULL
    , PRIMARY KEY (`id`)  ) ENGINE = InnoDB;"
);

$pdo->query("CREATE TABLE IF NOT EXISTS`posts` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `title` TEXT NOT NULL , 
    `content` TEXT NOT NULL , 
    `user` VARCHAR(100) NOT NULL , 
    `date` DATETIME NOT NULL , 
    PRIMARY KEY (`id`)) ENGINE = InnoDB;"
);


if($_POST['op']=="1"){
    $token1 = str_replace('Basic ', '', getallheaders()['authorization']);
    

    $data1 = [
        'userName' => $_POST['name'],
        'password' => $_POST['password'],
        'token' => $token1
    ];

    if($token1!="dW5kZWZpbmVkOnVuZGVmaW5lZA=="){
        setcookie('connexion', $token1, time() + 60 * 60);
    };
    
    if($data1['userName']!="undefined"){
    
        $request1 = $pdo->prepare("INSERT INTO `users`(`id`, `nom`, `password`, `token`) VALUES (0, :nom, :password, :token)");
        $request1->execute(array(
                'nom'=>$data1['userName'],
                'password'=>$data1['password'],
                'token' => $data1['token']
            )
        );
    }
}elseif($_POST['op']=="2"){

    $data2 = [
        'title' => $_POST['title'],
        'content' => $_POST['content'],
        'token' => $_POST['token']
    ];

    $userPost = $pdo->prepare("SELECT * FROM `users` WHERE `token`=:token");
    $userPost->execute(array(
        'token'=>$data2['token']
    ));

    $userPostData = $userPost->fetchAll();

    print_r($userPostData[0]['nom']);
    
    if($data2['title']!="undefined"){
        $request2 = $pdo->prepare("INSERT INTO `posts`(`id`, `title`, `content`, `user`, `date`) VALUES (0, :title, :content, :user, NOW())");
        $request2->execute(array(
                'title'=>$data2['title'],
                'content'=>$data2['content'],
                'user'=>$userPostData[0]['nom']
            )
        );
    }
}elseif($_POST['op']=="4"){

    $data4 = [
        'userName' => $_POST['name'],
        'password' => $_POST['password']
    ];
    
    $connexion = $pdo->query("SELECT * FROM `users`");

    $connexionData = $connexion->fetchAll();

    foreach ($connexionData as $value) {
        if($value['nom']==$data4['userName'] && $value['password']==$data4['password']){
            setcookie('connexion', $value['token'], time() + 60 * 60);
        }
        
    }

}

$posts = $pdo->query("SELECT * FROM `posts`");
$users = $pdo->query("SELECT * FROM `users`");


$postsData = $posts->fetchAll();
$usersData = $users->fetchAll();


echo json_encode([
    "postsData" => $postsData,
    "usersData" => $usersData
]);







