import React from 'react';
import { View, Text, StyleSheet, 
  Image ,TextInput,TouchableOpacity,
  SafeAreaProvider,useSafeAreaInsets, 
  ImageBackground,
   ScrollView,
   Pressable,Alert,
   Modal,
   ViewComponent} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import HomeScreen from './Home';
import ProgressBar from '../ProgressBar';
import { useEffect } from 'react';

export default function PrivacyPolicy(){
  const navigation = useNavigation();
  const [press,setPress]=useState(false)
  
const navigateToNestedScreen = () => {
      navigation.navigate('NestedStackNavigator', { screen: 'NestedScreen' });
    };
  return (
     
        <View style={styles.container} >
            <View style={styles.sectionHeader}>
              
              <Feather
                 onPress={() => navigation.goBack()}
                    name="arrow-left" 
                    size={27} 
                    color="white" 
                    style={{marginTop:20,marginLeft:10}} 
                />
                <Text style={{fontSize: 18,
                              flex: 1, 
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               color:'white'}}>Privacy Policy</Text>
                </View> 
    <ScrollView>
    
                <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:30,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'bold'
                         }}>Privacy Policy of Telugu Matrimony</Text>
              <Text style={{
                               fontSize:14,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:10,
                               fontWeight:'normal'
                         }}><Text style={{ fontWeight: 'bold', color: 'skyblue' }}>Telugu Matrimony.com  </Text> is an online matrimonial portal endeavouring constantly to provide you with matrimonial Services. This privacy statement is common to all the matrimonial Website/apps operated under  TeluguMatrimony.com  Since we are  strongly committed  to your  right to privacy, regard to the information we collect fom you.  you acknowledge that you are disclosing information voluntarily. 
                         By accessing /using the website/apps and/or by providing your information,you consent to the collection and use of the info you disclose  on the website/apps  in accordance with this Privacy Policy. If you do not use or access this website/apps.  </Text>


            
                         <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'bold'
                         }}>Privacy Policy of Telugu Matrimony</Text>
                         <Text style={{
                               fontSize:14,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:10,
                               fontWeight:'normal'
                         }}>
                            The information we gather from members and visitors who apply for the various services our Website/Apps offers includes, but may not be limited to, photo of the user, your profile videos you wish to upload, email address, name, date of birth, educational qualifications, based on your explicitly consent identify proof documents which you voluntarily submit for verification purpose, a user-specified password, mailing address, zip/pin code and telephone/mobile number or fax number.
                         </Text>
                         <Text style={{
                               fontSize:14,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:10,
                               fontWeight:'normal'
                         }}>
                            We use a secure server for credit card transactions to protect the credit card information of our users and Cookies are used to store the login information. Cookies are small files placed on your hard drive that will assist us in providing our services. You may also encounter Cookies or identical/related devices on certain pages of the website/apps that are placed by third parties. We do not control the use of cookies by third parties.

                         </Text>
                         <Text style={{
                               fontSize:14,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:10,
                               fontWeight:'normal'
                         }}>
                           If you establish a credit account with us to pay the fees we charge, some additional information, including a billing address, a credit/debit card number and a credit/debit card expiration date and tracking information from cheques or demand drafts is collected.
                         </Text>
                        <Text
                         style={{
                            fontSize:14,
                            marginRight:20,
                            marginLeft:20,
                            marginTop:10,
                            fontWeight:'normal'
                      }}>
                        The user information we collect depends on the context of your interactions with us and the website or Apps, the choices you make and the products and features you use. The User Information is used for authentication and account access, If a user registers using social networking platforms such as Facebook, Google, LinkedIn and others we may collect personal data you choose to allow us to access through their APIs. When the user accesses our websites or apps, data relating to device ID, log files ,Geographic Location, device Information/specification are also collected automatically.
                        </Text>

                    <Text
                     style={{
                        fontSize:14,
                        marginRight:20,
                        marginLeft:20,
                        marginTop:10,
                        fontWeight:'normal'
                  }}>We may use also your personal information for analysis of data, usage trends and to evaluate and improve our site/App, marketing research , preventing of frauds. In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about our users' activity on our website/apps. We identify and use your IP address to help diagnose problems with our server, and to administer our website/apps. Your IP address is also used to help identify you and to gather broad demographic information.

                    </Text>
                    <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'bold'
                         }}>How the website/apps uses the information it collects/tracks?</Text>
                <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>
               Bharat Matrimony.com collects information for data analysis, identifying usage trends,determining the effectiveness of our promotional campaigns and to evaluate and improve our websites or apps, products, and services ,marketing research from our users primarily to ensure that we are able to fulfil your requirements and to deliver Personalised experience.
                </Text>

                <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'bold'
                         }}>
                         For European Union Members (EU)</Text>
    

            <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>
                If you are located in the EU, you will be asked to provide consent to the collection, processing, and sharing of your personal information. Personal information means any information related to an identified or identifiable natural person. You have the right to share and access your personal information and right to withdraw consent for sharing your personal information at any point of time and right to erase your personal information subject to applicable laws. for sharing your personal information at any point of time. You can withdraw your consent provided by contacting us. Your personal information may be stored in databases located outside of the EU including in India. Where we transfer personal data outside of EU, we either transfer personal information to countries that provide an adequate level of protection or we have appropriate safeguards in place. We may require proof of or need to verify your identity before we can give effect to these rights. To request to review, update, or delete your personal information, please submit a request form by sending an email to privacy@matrimony.com. We may share your information with third parties who are an anti-fraud solution provider(s) located in UK. They help us to ensure we keep you safe from scammers and fraudster.

            </Text>

            <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:30,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'bold'
                         }}>With whom the website/apps shares the information it collects/tracks?</Text>
    

                <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>We may share such identifiable information with our associates/affiliates/subsidiaries and such associates/affiliates/subsidiaries may market to you as a result of such sharing. Any information you give us is held with the utmost care and security. We are also bound to cooperate fully should a situation arise where we are required by law or legal process to provide information about a customer/visitor.
            </Text>
            <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>Where required or permitted by law, information may be provided to others, such as regulators and law enforcement agencies or to protect the rights ,property or personal safety of other members or the general public . We may voluntarily share your information with law enforcement agencies / Gateway service providers / anti-fraud solution provider(s) if we feel that the transaction is of suspicious nature.

            </Text>
            <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>From time to time, we may consider corporate transactions such as a merger, acquisition, reorganization, asset sale, or similar. In these instances, we may transfer or allow access to information to enable the assessment and undertaking of that transaction. If we buy or sell any business or assets, personal information may be transferred to third parties involved in the transaction.
            </Text>

            <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>
                Our website/apps links to other website/apps that may collect personally identifiable information about you. We are not responsible for the privacy policy or the contents of those linked website/apps.
            </Text>
            <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'bold'
                         }}>How Long Do We Keep Your Information?
                         </Text>
                <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>
              As stipulated in the Privacy Policy we will retain the information we collect from users under the following circumstances:
              </Text>

              <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>
              For as long as the users subscribe to our services to meet their suitable purpose(s) for which it was collected, for the sake of enforcing agreements, for performing audits, for resolving any form of disputes, for establishing legal defences, for pursuing legitimate businesses and to comply with the relevant applicable laws.
              </Text>

              <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'bold'
                         }}>What are the Security Precautions in respect of your personal information?

                         </Text>
                <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>

We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate internal control measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Once your information is in our possession, we adhere to security guidelines protecting it against unauthorised access.
              </Text>

        <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'bold'
                         }}>Change of Privacy Policy
                         </Text>
                <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>
              We may change this Privacy Policy without notice from time to time without any notice to you. However, changes will be updated in the Privacy Policy page.
              </Text>
              
               <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'bold'
                         }}>
                         How to address your Grievance : 
                         </Text>
                <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>
                Grievance officer : Mr. Anand Vasudev.
                Address: Matrimony.com Limited, 
                Contact details: 94,
                TVH Belciaa Towers,Tower-2, 5th Floor, MRC Nagar,
                Chennai 600 028 grievanceofficer@matrimony.com

              </Text>

              <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>

The Grievance officer shall be available between 10 am to 6 pm IST from Monday to Saturday excluding Sunday's and Public Holidays in India.
              </Text>

            <Text
                 style={{
                    fontSize:14,
                    marginRight:20,
                    marginLeft:20,
                    marginTop:10,
                    fontWeight:'normal'
              }}>
                The Grievance officer is appointed as per Section 5 (9) of the Information Technology ( Reasonable Security & Procedures and Sensitive Personal data or Information ) Rule, 2011.
              </Text>
    

 </ScrollView>
</View>
       
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        marginBottom:20,
       
    },
    sectionHeader: {
      flexDirection:'row',
      height:70,
      width:'100%',
      backgroundColor: '#065EC4',
      borderRadius: 10,
      shadowColor: '#27E2E2',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    
});