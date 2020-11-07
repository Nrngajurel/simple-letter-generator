const Dotcomdotnpletter = {
    template: `<div class="flex px-10">
                    <div class="w-1/2 ">
                        <div class="bg-white shadow font-sans px-10 py-10  text-sm">
                            
                            Date: - {{todaysDate}}<br/>
                            <br/>
                            To,<br/>
                            The Mercantile Communication<br/>
                            Durbarmarg, Kathmandu, Nepal<br/>
                            <br/>
                            Subject :- Request to register a new domain {{ domain }}<br/>
                            <br/>
                            Dear Sir/Madam,<br/>
                            <p>We request you to register a new domain name {{ domain }}  for our Law Firm located at (Your Company Address), Nepal.  We have submitted all the required documents needed to activate domain.
                            We request you to activate domain.</p><br/>
                            Thank you.<br/>
                            <br/>
                            Your’s  Sincerely,<br/>

                            -------------------------------------------<br/>
                            {{ name }}<br/>
                            {{ post }}<br/>
                            
                        </div>
                    </div>
                <div class="w-1/2 bg-gray-300">
                    <div class="pl-10">
                        
                    </div>
                </div>
    <div>`,
    data() {
        return {
            name:"Master",
            post:"",
            domain:""
        }
    },
    computed: {
        todaysDate(){
            return Date();
        }
    },
   }

   