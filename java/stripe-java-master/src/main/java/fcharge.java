import java.util.HashMap;
import java.util.Map;

import com.stripe.*;
import com.stripe.model.Charge;

public class fcharge {

	public static void main(String[] args) {
		Stripe.apiKey = "sk_test_RVommOo9ArONhawECkwu3Kz3";

		Map<String, Object> chargeParams = new HashMap<String, Object>();
		chargeParams.put("amount", 400);
		chargeParams.put("currency", "usd");
		chargeParams.put("card", "tok_102mRP2lXUqPieqhv2jub7lr"); // obtained with Stripe.js
		chargeParams.put("description", "Charge for test@example.com");
		chargeParams.put("metadata", initialMetadata);

		Charge.create(chargeParams);

	}

}
