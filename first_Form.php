<?php
    if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['mobile'];
		
		$to='livexcellence1@gmail.com,jithendraathipatla@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Prestige Waterford';
		$message="ProjectName:"."Prestige Waterford"."\n"."Name :".$name."\n"."Phone :".$phone."\n"."Email :".$email."\n";
		$headers="From: ".$email;
		if(mail($to, $subject, $message, $headers)){
		
		echo "<h1  style=\"text-align:center\">Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		// echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=1cQjo-FwWNmCqFv_71lLac2heQyOIGTZT">Click here to download Brochure [Hyde]</a><h3>';
		// echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=1uCIKnYTyTH27_ueX1dvAIbAG_UCtOcKd">Click here to download Brochure [Regent]</a><h3>';
	    }
		else{
			echo "Something went wrong!";
		}
			
	}
?>