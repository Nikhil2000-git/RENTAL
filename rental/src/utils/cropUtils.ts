
export interface Crop {
  id: string;
  pricePerAcre: number;
}

export const crops: Record<string, Crop> = {
  default: { 
    id: 'default', 
    pricePerAcre: 500 
  },
  cotton: { 
    id: 'cotton', 
    pricePerAcre: 600 
  },
  maize: { 
    id: 'maize', 
    pricePerAcre: 800 
  },
  paddy: {
    id: 'paddy',
    pricePerAcre: 500
  }
};

/**
 * Fixed webhook URL for notifications
 */
export const NOTIFICATION_WEBHOOK_URL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzNjA0MzQ1MjY5NTUzMzUxMzUi_pc";

/**
 * Send a notification to the configured webhook URL
 * @param data The data to send to the webhook
 * @returns A promise that resolves to true if the notification was sent successfully
 */
export const sendNotification = async (data: any): Promise<boolean> => {
  try {
    console.log("Sending notification to webhook:", NOTIFICATION_WEBHOOK_URL);
    console.log("Notification data:", JSON.stringify(data));
    
    await fetch(NOTIFICATION_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", // Handle CORS for webhook services
      body: JSON.stringify(data),
    });
    
    console.log("Notification request sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending notification:", error);
    return false;
  }
};

/**
 * Guide to setting up notifications:
 * 
 * 1. WhatsApp: 
 *    - Create a Pabbly Connect workflow with Webhook trigger and WhatsApp Business action
 *    - Map messageForWhatsApp to your WhatsApp message field
 * 
 * 2. SMS:
 *    - Create a Pabbly Connect workflow with Webhook trigger and Twilio SMS action
 *    - Map messageForSMS to your SMS message field
 * 
 * 3. Email:
 *    - Create a Pabbly Connect workflow with Webhook trigger and Gmail/Email action
 *    - Map messageForEmail to your email body field
 */
export const getNotificationGuide = () => {
  return {
    whatsapp: "Create a Pabbly Connect workflow with Webhook trigger and WhatsApp Business action",
    sms: "Create a Pabbly Connect workflow with Webhook trigger and Twilio SMS action",
    email: "Create a Pabbly Connect workflow with Webhook trigger and Gmail/Email action"
  };
};
