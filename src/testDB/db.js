
export const db = [
	{
		id: '01',
		name: 'Product_1',
		price: 12,
		description: 'Test1',
		aval: true,
	},
	{
		id: '02',
		name: 'Product_2',
		price: 15,
		description: 'Test2',
		aval: false,
	},
	{
		id: '03',
		name: 'Product_3',
		price: 32,
		description: 'Test3',
		aval: true,
	},
	{
		id: '04',
		name: 'Product_4',
		price: 124,
		description: 'Test3',
		aval: false,
	},
	{
		id: '05',
		name: 'Product_5',
		price: 5,
		description: 'Test5',
		aval: true,
	},
];



export const  getDataByID =  (id) =>{
	return  db.filter(el => el.id === id);
};

export default db