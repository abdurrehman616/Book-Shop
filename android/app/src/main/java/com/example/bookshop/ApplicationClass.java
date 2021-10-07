package com.example.bookshop;

import android.app.Application;
import com.onesignal.OneSignal;

public class ApplicationClass extends Application {
private static final String ONESIGNAL_APP_ID = "bc013503-eee2-4020-98ab-fe3cc842cee4";
  
    @Override
    public void onCreate() {
        super.onCreate();
        
        // Enable verbose OneSignal logging to debug issues if needed.
        OneSignal.setLogLevel(OneSignal.LOG_LEVEL.VERBOSE, OneSignal.LOG_LEVEL.NONE);
        
        // OneSignal Initialization
        OneSignal.initWithContext(this);
        OneSignal.setAppId(ONESIGNAL_APP_ID);
    }
}
