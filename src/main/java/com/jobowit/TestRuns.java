package com.jobowit;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Component;

import com.jobowit.domain.BusinessAccount;
import com.jobowit.service.BusinessAccountService;

@Component
@ComponentScan
@EnableAutoConfiguration
@Configuration
@PropertySource(value = { "classpath:application.properties" })
public class TestRuns
{
	@Autowired
	private Environment env;

	@Bean
	@Primary
	public DataSource dataSource()
	{
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName(env.getRequiredProperty("spring.datasource.driver-class-name"));
		dataSource.setUrl(env.getRequiredProperty("spring.datasource.url"));
		dataSource.setUsername(env.getRequiredProperty("spring.datasource.username"));
		dataSource.setPassword(env.getRequiredProperty("spring.datasource.password"));
		return dataSource;
	}

	public static void main(String[] laughs)
	{
		TestRuns t = new TestRuns();
		t.start();
	}

	private void start()
	{
		ApplicationContext ctx = new AnnotationConfigApplicationContext(TestRuns.class);
		BusinessAccountService bas = ctx.getBean(BusinessAccountService.class);
		bas.saveBusinessAccount(new BusinessAccount("AJX Company Pvt Ltd", "John Flamigo"));
		bas.saveBusinessAccount(new BusinessAccount("Bushra General Trading", "Mearaj Bhagad"));
		bas.saveBusinessAccount(new BusinessAccount("Aprium General Trading", "Rais Bhagad"));
		for (BusinessAccount bAccounts : bas.findAllBusinessAccounts())
		{
			System.out.println(bAccounts.toString());
		}
		((ConfigurableApplicationContext)ctx).close();
	}
}
