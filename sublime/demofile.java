import java.io.*;
class demofile{
	public static void main(String aa []) {
try{
	File f=new File("rock.txt");
	f.createNewFile();

FileWriter fw=new FileWriter("rock.txt",true);
fw.write("i like to do programming");
	}catch(Exception e){
		System.out.println(e);
			
	}
		System.out.println("success");

}}