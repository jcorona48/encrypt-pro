import { OPTIONS } from "@/config/options";
import { askQuestion, clearConsole, printOptions } from "@/utils/console";

const main = async () => {
    while (true) {
        clearConsole();
        printOptions(OPTIONS, "Select an option:");
        const choice = await askQuestion("Enter the option number: ");
        const action = OPTIONS.find(option => option.value === parseInt(choice))?.action;

        if (!action) {
            console.error("Invalid option");
            await askQuestion("Press Enter to continue...");
            continue
        }

        clearConsole();
        await action();
        await askQuestion("Press Enter to continue...");
    }
};

main();