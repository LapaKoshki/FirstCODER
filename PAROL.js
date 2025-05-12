
//Короче фокус с 3 переменными

const PAROL = (req, res, next) => {
    console.log('Ожидаемый токен:', process.env.AUTH_TOKEN);  

    //Короче, сучий GPT говорит что браузеры и т.д. отправляют заголовок Authorization, не буду выебываться

    const authHeader = req.headers['authorization'];
    if (!authHeader) { {res.status(401).json({error:'Нет заголовка'});
    return;
     };
    };
     authHeader.startsWith('Bearer ');
     if (!authHeader.startsWith('Bearer ')) {
  res.status(401).json({ error: 'Неверный формат начала' });
  return;
}
    const token = authHeader.split(' ')[1];
    console.log('Полученный токен:', token);
    process.env.AUTH_TOKEN;
    if (token !== process.env.AUTH_TOKEN) {res.status(403).json({error:'Ты пиздабол'});
    return;};
    next();

};

module.exports = PAROL;