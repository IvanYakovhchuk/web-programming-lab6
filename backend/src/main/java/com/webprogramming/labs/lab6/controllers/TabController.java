package com.webprogramming.labs.lab6.controllers;

import com.webprogramming.labs.lab6.models.Tab;
import com.webprogramming.labs.lab6.repositories.TabRepository;
import com.webprogramming.labs.lab6.requests.TabRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://ivanyakovhchuk.github.io")
@RequestMapping("/api/tabs")
public class TabController {

    private final TabRepository tabRepository;

    @Autowired
    public TabController(TabRepository tabRepository) {
        this.tabRepository = tabRepository;
    }

    @GetMapping
    public List<String> getTabs() {
        List<Tab> tabs = tabRepository.findAll();
        return tabs.stream().map(Tab::getTitle).toList();
    }

    @PostMapping
    public void createTab(@RequestBody TabRequest tabsRequest) {
        System.out.println("Received tabs: " + tabsRequest.getTabs()); // Додайте логування
        for (String tabTitle : tabsRequest.getTabs()) {
            Tab newTab = new Tab();
            newTab.setTitle(tabTitle);
            tabRepository.save(newTab);
        }
    }

    @DeleteMapping
    public void deleteAllTabs() {
        tabRepository.deleteAll();
    }
}
