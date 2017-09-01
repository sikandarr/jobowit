package com.jobowit.utils;

import java.util.Random;

public class RandomColor
{

	public static String generate()
	{
		Random random = new Random();
		int nextInt = random.nextInt(256 * 256 * 256);
		String colorCode = String.format("#%06x", nextInt);
		return colorCode;
	}

}
