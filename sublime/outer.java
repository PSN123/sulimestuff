// class outer{
// class inner{
// public static void main(String aa []){
// 	System.out.println("inner class main method");
// }
// }
// }

// class outer{
// 	class inner{
// 		public void m1(){
// 			System.out.println("inner class");
// 		}
// 	}
// 	public static void main(String aa []){
// 		// outer o=new outer();
// 		// outer.inner i=o.new inner();
// 		outer.inner i=new outer().new inner();
// 		i.m1();
// 	}
// }


// class outer{
// 	class inner{
// 		public void m1(){
// 			System.out.println("hi i am inner");
// 		}
// 	}
// 	public void m2(){
// inner i=new inner();
// i.m1();
// 	}
// 	public static void main(String aa []){
// 		outer o=new outer();
// 		o.m2();
// 	}
// }

class outer{
	class inner{
		public void m1(){
			System.out.println("inner");
		}
	}
}
class test{
	public static void main(String aa []){
		outer o=new outer();
		outer.inner i=o.new inner();
		i.m1();
	}
}
