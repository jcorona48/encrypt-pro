import { OPTIONS } from "@/config/options";
import { askQuestion, clearConsole } from "@/utils/console";

const main = async () => {
    while (true) {
        clearConsole();
        console.log("Select an option:");
        OPTIONS.forEach(option => console.log(`${option.value}. ${option.text}`));
        const choice = await askQuestion("Enter the option number: ") as string;
        const action = OPTIONS.find(option => option.value === parseInt(choice))?.action;

        if (!action) {
            console.log("Invalid option");
            continue
        }

        clearConsole();
        await action();
    }
};

main();