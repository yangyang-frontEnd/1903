//1-导包
const mongoose = require('mongoose');
//2- 链接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//3- 创建了一个模型
//结集合的名字 ,可以通过这样的模型设计表
const Cat = mongoose.model('Cat', { name: String });
for(var i=0;i<100 ;i++){
	//4- 实例化了一个cat
	const kitty = new Cat({ name: 'Zildjian' });
	//5- 持久化保存
	kitty.save().then(() => console.log('meow'));
}
