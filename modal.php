<?php
    if(isset($_POST['submit'])){
		$name=$_POST['client_name'];
		$email=$_POST['client_mail_id'];
		$phone=$_POST['client_phone_number'];
	
		$to='livexcellence1@gmail.com, jithendraathipatla@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Phoenix one Banglore west';
		$message="ProjectName:"."Phoenix one Banglore west"."\n"."Name :".$name."\n"."Phone :".$phone."\n"."Email :".$email."\n";
		$headers="From: ".$email;
		if(mail($to, $subject, $message, $headers)){
		echo "<h1 style=\"text-align:center\">Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		// echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=1cQjo-FwWNmCqFv_71lLac2heQyOIGTZT">Click here to download Brochure [Hyde]</a><h3>';
		// echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=1uCIKnYTyTH27_ueX1dvAIbAG_UCtOcKd">Click here to download Brochure [Regent]</a><h3>';
	
	  }
		
	}
?>