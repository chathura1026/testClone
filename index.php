<?php

interface Cal{
	public function get_Total();
}
class total implements Cal{
private $num1;
private $num2;

public function __construct($num1){
$this->num1 = $num1;
}
public function __construct($num2){
$this->num2 = $num2;
}

public function get_Total(){
	return $this->num1 + $this->num2;
}
echo "Total is: " .get_Total();
?>