package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CarWashProducts {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	
	private String productName;
	
	private String productDescription;
	
	private double productPrice;
	
	private int productQuantity;
	
	private String productCategory;
	
	private String productImagePath;
	
	
	
	public CarWashProducts() {
		super();
		
	}



	public CarWashProducts(int productId, String productName, String productDescription, double productPrice,
			int productQuantity, String productCategory, String productImagePath) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.productQuantity = productQuantity;
		this.productCategory = productCategory;
		this.productImagePath = productImagePath;
	}



	public int getProductId() {
		return productId;
	}



	public void setProductId(int productId) {
		this.productId = productId;
	}



	public String getProductName() {
		return productName;
	}



	public void setProductName(String productName) {
		this.productName = productName;
	}



	public String getProductDescription() {
		return productDescription;
	}



	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}



	public double getProductPrice() {
		return productPrice;
	}



	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}



	public int getProductQuantity() {
		return productQuantity;
	}



	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}



	public String getProductCategory() {
		return productCategory;
	}



	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}



	public String getProductImagePath() {
		return productImagePath;
	}



	public void setProductImagePath(String productImagePath) {
		this.productImagePath = productImagePath;
	}



	@Override
	public String toString() {
		return "CarWashProducts [productId=" + productId + ", productName=" + productName + ", productDescription="
				+ productDescription + ", productPrice=" + productPrice + ", productQuantity=" + productQuantity
				+ ", productCategory=" + productCategory + ", productImagePath=" + productImagePath + "]";
	}


	
	
	

}
