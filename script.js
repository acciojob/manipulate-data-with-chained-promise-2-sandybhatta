//your JS code here. If required.
const op=document.getElementById('output')
let arr=[1,2,3,4]
new Promise((res,rej)=>{
		res(arr)
})
.then((arr)=>{
	let arr1=arr.filter((item)=>item%2==0)
	setTimeout(()=>{
		arr1.map(item=>{
			op.innerText=`${item}`
		})
	},1000)
	return arr1
})
.then(arr1=>{
	setTimeout(()=>{
		arr1.map(item=>{
			op.innerText=`${item*2}`
		})
	})
})